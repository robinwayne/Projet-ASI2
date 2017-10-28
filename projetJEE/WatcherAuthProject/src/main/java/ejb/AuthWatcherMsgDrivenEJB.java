package ejb;

import java.util.Date;

import javax.ejb.ActivationConfigProperty;
import javax.ejb.EJB;
import javax.ejb.MessageDriven;
import javax.inject.Inject;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;
import javax.jms.TextMessage;
import fr.cpe.common.model.Role;
import fr.cpe.common.model.UserModel;
import fr.cpe.ejb.MessageSenderQueueLocal;
//import model.DataContainer;
import fr.cpe.dao.UserDao;


@MessageDriven(          //paramètres nécessaires à la configuration de l'EJB 
		activationConfig = {   // le type et la destination sur laquelle le bean doit écouter 
				@ActivationConfigProperty(
						propertyName = "destinationType",
						propertyValue = "javax.jms.Topic"),
				@ActivationConfigProperty(
						propertyName = "destination",
						propertyValue = "java:/jms/watcherAuthJMS")
		})

public class AuthWatcherMsgDrivenEJB implements MessageListener {
	
	@Inject
	private UserDao userDao;
	
	@EJB
	MessageSenderQueueLocal sender;
	
	//private DataContainer dataContainer;
	
	/*public AuthWatcherMsgDrivenEJB(){
		dataContainer = new DataContainer();
	}*/
	
	public void onMessage(Message message){
		try {
			 if (message instanceof TextMessage) {
				 
				 System.out.println("Topic: I received a TextMessage at "+ new Date());
				 TextMessage msg = (TextMessage) message;
				 System.out.println("Message is : " + msg.getText());

			 } else if (message instanceof ObjectMessage) {
				 System.out.println("Topic: I received an ObjectMessage at "+ new Date());
				 ObjectMessage msg = (ObjectMessage) message;

			if( msg.getObject() instanceof UserModel){
				 UserModel user=(UserModel)msg.getObject();
	
				 System.out.println("User Details: ");
				 System.out.println("login:"+user.getLogin());
				 System.out.println("pwd:"+user.getPassword());

				 Role currentTestRole=userDao.checkUser(user);
				 if( Role.NONE==currentTestRole){
					 sender.sendMessage(user);
				 }else{
					 user.setRole(currentTestRole);
					 sender.sendMessage(user);
				 }
			 	}
			 } else {
				 System.out.println("Not valid message for this Queue MDB");
			 }
			 
		}catch (JMSException e) {
			 e.printStackTrace();
			}
	}
}
		
