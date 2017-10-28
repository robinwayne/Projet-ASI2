package fr.cpe.common.dto;

public class UserPostLogin {
	
	private String login;
	private String role;
	private boolean validAuth;
	
	
	public boolean isValidAuth() {
		return validAuth;
	}
	public void setValidAuth(boolean validAuth) {
		this.validAuth = validAuth;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}	
		
	public UserPostLogin() {
		super();
	
	}
	@Override
	public String toString() {
		return "UserPostLogin [login=" + login + ", role=" + role + ", validAuth=" + validAuth + "]";
	}

}
