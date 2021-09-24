function requestSamples(/*String*/ tcpn, /*String*/ requestPartNbr) {

	var samplesURL = TE_getApplicationServerUrl() + "/commerce/sam/createSampleReq.do";
	var encodedTcpn = encodeURIComponent(tcpn);
	var encodedRqpn = encodeURIComponent(requestPartNbr);
	
	samplesURL += "?TCPN=" + encodedTcpn + "&RQPN=" + encodedRqpn;

	window.location = samplesURL;
}
