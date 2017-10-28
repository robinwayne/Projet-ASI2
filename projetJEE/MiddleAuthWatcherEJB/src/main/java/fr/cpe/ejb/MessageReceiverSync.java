package fr.cpe.ejb;

import javax.annotation.Resource;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Queue;

import fr.cpe.common.model.UserModel;

@Stateless
@LocalBean
public class MessageReceiverSync implements MessageReceiverSyncLocal {

	@Inject
	JMSContext context;

	@Resource(mappedName = "java:/jms/queue/watcherqueue")
	Queue queue;

	public UserModel receiveMessage() {

		System.out.println("je suis dans receiveMessage()");
		JMSConsumer consumer = context.createConsumer(queue);
		Message message = consumer.receive(5000);
		UserModel user = new UserModel();
		try {
			user = message.getBody(UserModel.class);
			System.out.println(user.getLogin());
		} catch (JMSException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		consumer.close();

		return user;
	}

}
