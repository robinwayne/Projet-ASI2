package fr.cpe.rest.impl;

import java.util.logging.Logger;

import javax.inject.Inject;

import fr.cpe.common.dto.UserLogin;
import fr.cpe.common.dto.UserPostLogin;
import fr.cpe.common.model.UserModel;
import fr.cpe.ejb.MessageReceiverSyncLocal;
import fr.cpe.ejb.MessageSenderLocal;
import fr.cpe.rest.IWatcherAuthRestService;

public class WatcherAuthRestService implements IWatcherAuthRestService {

	Logger logger = Logger.getLogger(WatcherAuthRestService.class.getName());
	

	@Inject
	private MessageSenderLocal sender;

	@Inject
	private MessageReceiverSyncLocal receiver;

	@Override
	// public String doAuth(UserModel current_user) {

	public String doAuth(UserLogin userLogin) {
		

		UserModel user = new UserModel(userLogin.getLogin(), userLogin.getPassword());
		
		
		System.out.println("avant envoie du user par send Message depuis webservice");
		sender.sendMessage(user);
		System.out.println("apres envoie du user par la methode sendMessage() depuis webservice");
		
		
		
		System.out.println("avant reception du user par la methode receiveMessage() dans le WS");		
		UserModel user_result = receiver.receiveMessage();		
		System.out.println("apres reception du user par la methode receiveMessage() dans le WS");

		/*
		 UserPostLogin user_logged = new UserPostLogin();
		 
		 user_logged.setLogin(user.getLogin()); user_logged.setRole("ADMIN");
		 user_logged.setValidAuth(true);
		 
		 */

		System.out.println("Apres Auth " + user_result.toString());

		return user_result.toString();

	}

}
