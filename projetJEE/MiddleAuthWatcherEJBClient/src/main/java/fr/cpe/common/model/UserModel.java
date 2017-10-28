package fr.cpe.common.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import fr.cpe.common.model.Role;

@Entity
@Table(name = "projetJEE.users")


public class UserModel implements Serializable {

	@Override
	public String toString() {
		return "UserModel [id=" + id + ", login=" + login + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", role=" + role + "]";
	}

	private static final long serialVersionUID = 1L;

	public UserModel() {
		super();
	}

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Integer id;

	@Column(name = "login", nullable = false, unique = true)
	private String login;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "role")
	private String role;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
	public Role role(){
		return Role.valueOf(role);
	}

	public void setRole(Role role) {
		this.role = role.name();
	}

	public UserModel(String login, String password) {
		this.login = login;
		this.password = password;
	}

}