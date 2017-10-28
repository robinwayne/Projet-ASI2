package fr.cpe.ejb;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.Topic;

import fr.cpe.common.model.UserModel;


@Stateless
public class MessageSender implements MessageSenderLocal {
	
	@Inject
	JMSContext context;
	
	@Resource(mappedName = "java:/jms/watcherAuthJMS")
	Topic topic;
	
	public void sendMessage(String message){
		System.out.println("je suis dans sendMessage()"); 
		context.createProducer().send(topic, message);
	}
	
	public void sendMessage(UserModel user){
		System.out.println("je suis dans sendMessage()"); 
		context.createProducer().send(topic, user);
	}	
}

