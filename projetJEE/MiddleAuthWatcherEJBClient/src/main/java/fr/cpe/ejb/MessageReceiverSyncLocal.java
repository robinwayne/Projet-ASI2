package fr.cpe.ejb;

import javax.ejb.Local;

import fr.cpe.common.model.UserModel;

@Local
public interface MessageReceiverSyncLocal {

	public UserModel receiveMessage();
	
}

