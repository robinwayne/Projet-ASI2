package fr.cpe.rest;



import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import fr.cpe.common.dto.UserLogin;


@Path("/WatcherAuth")
public interface IWatcherAuthRestService {
	
	@POST
	@Consumes("application/json")	
	@Produces("application/json")
	@Path("/")
	//public String doAuth(UserModel current_user);
	public String doAuth(UserLogin userLogin);
	
	
	}
