package fr.cpe.dao;


import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import fr.cpe.common.model.Role;
import fr.cpe.common.model.UserModel;

@Stateless
public class UserDao {
	
	@PersistenceContext
	EntityManager em;
	
	public List<UserModel> getUserByLoginAndPassword(String login, String password) {
		
        CriteriaBuilder builder = em.getCriteriaBuilder();

        CriteriaQuery<UserModel> crit = builder.createQuery(UserModel.class);
        Root<UserModel> root = crit.from(UserModel.class);
        crit.select(root)
                .where(builder.like(builder.lower(root.get("login")), "%" + login.toLowerCase() + "%"),
                		builder.like(builder.lower(root.get("password")), "%" + password.toLowerCase() + "%") );

        List<UserModel> users = em.createQuery(crit).getResultList();

        return users;
    }
	

	public Role checkUser(UserModel user) {
	 	
		Role role = Role.NONE;
		
		 UserModel user_autho = getUserByLoginAndPassword(user.getLogin(), user.getPassword()).get(0);
		 if(user_autho !=null){
			 role=user_autho.role();
		 }		
		
		return role ;		

	}
}
