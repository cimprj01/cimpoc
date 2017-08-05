package cim.enterprise.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import cim.enterprise.data.Lot;
import cim.enterprise.data.LotProcessJob;
import cim.enterprise.data.ProcessHistory;
import cim.enterprise.data.repository.LotProcessRepository;
import cim.enterprise.data.repository.LotRepository;

@RestController
@EnableHystrix
public class LotService {

	Logger log = Logger.getLogger(LotService.class);
	
	@Autowired
	LotRepository lotRepository;
	
	@Autowired
	LotProcessRepository lotProcessHistory;

	@RequestMapping(value="/lotservice/getAllLots", produces = "application/json")
    public @ResponseBody CimTxnResult getAllLots(@RequestParam(value="user") String user) {
    	log.info("getAllLots() ENTRY : UserContext : " + user);
    	
    	CimTxnResult retObj = new CimTxnResult();
    	try
    	{
    		Iterable<Lot> lotList =  lotRepository.findAll();
    		retObj.setCimObject(lotList);
    		retObj.setTxnResult(0,"SUCCESS", null);
    		return retObj;
    	}
    	catch(Exception err)
    	{
    		log.error(err.getMessage());
    		err.printStackTrace();
    		retObj.setTxnResult(-9999,err.getMessage(), null);
    		return retObj;
    	}
    	finally
    	{
    		log.info("getAllLots() EXIT : UserContext : " + user);
    	}
    }	
	
  	@RequestMapping(value="/lotservice/lotinfo", produces = "application/json")
    public @ResponseBody CimTxnResult getLotInfo(@RequestParam(value="user") String user, @RequestParam(value="lotId") String lotId) {
    	log.info("getLotInfo() ENTRY : UserContext : " + user);
    	
    	CimTxnResult retObj = new CimTxnResult();
    	try
    	{
    		Lot lot =  lotRepository.findOne(lotId);
    		
    		
    		
    		LotProcessJob job = lotProcessHistory.findAnyProcessJob(lotId);
    		
    		lot.setLotJobProcess(job);
    		
    		retObj.setCimObject(lot);
    		retObj.setTxnResult(0,"SUCCESS", null);
    		return retObj;
    	}
    	catch(Exception err)
    	{
    		err.printStackTrace();
    		log.error(err.getMessage());
    		retObj.setTxnResult(-9999,err.getMessage(), null);
    		return retObj;
    	}
    	finally
    	{
    		log.info("getLotInfo() EXIT : UserContext : " + user);
    	}
    }
  	
  	
 	@RequestMapping(value="/lotservice/lothistory", produces = "application/json")
    public @ResponseBody CimTxnResult getLotHistory(@RequestParam(value="user") String user, @RequestParam(value="lotId") String lotId) {
    	log.info("getLotHistory() ENTRY : UserContext : " + user);
    	
    	CimTxnResult retObj = new CimTxnResult();
    	try
    	{
    		List<ProcessHistory> processHistoryList = lotProcessHistory.getLotHistory(lotId);
    		
    		retObj.setCimObject(processHistoryList);
    		retObj.setTxnResult(0,"SUCCESS", null);
    		return retObj;
    	}
    	catch(Exception err)
    	{
    		err.printStackTrace();
    		log.error(err.getMessage());
    		retObj.setTxnResult(-9999,err.getMessage(), null);
    		return retObj;
    	}
    	finally
    	{
    		log.info("getLotHistory() EXIT : UserContext : " + user);
    	}
    }	  	
}
