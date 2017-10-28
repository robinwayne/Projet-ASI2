//package model;
//
//import java.util.List;
//
//import javax.inject.Inject;
//
//import fr.cpe.common.model.UserModel;
//import fr.cpe.dao.UserDao;
//import fr.cpe.common.model.Role;
//import java.util.ArrayList;
//
//
//
//
//public class DataContainer {
//	
//	@Inject
//	private UserDao userDao;
//	
//	
//	
//	List<UserModel> users =new ArrayList<UserModel>();
//	
//	public DataContainer(){
//		
//		
//		/*
//		UserModel user1 = new UserModel("user1", "pwd1");
//		UserModel user2 = new UserModel("user2", "pwd2");
//		UserModel user3 = new UserModel("user3", "pwd3");
//		
//		
//		user1.setRole(Role.ADMIN);	
//		user2.setRole(Role.USER);	
//		user3.setRole(Role.NONE);
//		
//		users.add(user1);
//		users.add(user2);
//		users.add(user3);
//		*/
//		
//	}
//	
//	public Role checkUser(UserModel user) {
//	 	
//		for(UserModel usr : users){
//			if(usr.getLogin().equals(user.getLogin()) && usr.getPassword().equals(user.getPassword())){
//				return usr.getRole();
//			}
//				
//			}
//		return Role.NONE;
//		}
//	}