package cim.enterprise.service;

public class CimTxnInput {
	
	private String userToken;
	
	private String txnId;
	
	private String callType;

	public String getUserToken() {
		return userToken;
	}

	public void setUserToken(String userToken) {
		this.userToken = userToken;
	}

	public String getTxnId() {
		return txnId;
	}

	public void setTxnId(String txnId) {
		this.txnId = txnId;
	}

	public String getCallType() {
		return callType;
	}

	public void setCallType(String callType) {
		this.callType = callType;
	}
	
	
	
	

}
