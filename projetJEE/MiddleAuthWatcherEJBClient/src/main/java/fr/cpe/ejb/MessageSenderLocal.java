package fr.cpe.ejb;

import javax.ejb.Local;

import fr.cpe.common.model.UserModel;

@Local
public interface MessageSenderLocal {

	
	void sendMessage(String message);
	
	void sendMessage(UserModel user);
		
	
	
}
