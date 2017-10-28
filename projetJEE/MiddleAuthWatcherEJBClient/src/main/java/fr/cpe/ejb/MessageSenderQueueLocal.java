package fr.cpe.ejb;

import javax.ejb.Local;

import fr.cpe.common.model.UserModel;

@Local
public interface MessageSenderQueueLocal {

	public void sendMessage(String message);
	
	public void sendMessage(UserModel user); 
	
	
}
