package cim.enterprise.service.messaging;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.log4j.Logger;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import cim.enterprise.service.CimTxnInput;

@Service
@EnableKafka
public class CimMessageListener {
	
	Logger log = Logger.getLogger(CimMessageListener.class);

	//public final CountDownLatch countDownLatch1 = new CountDownLatch(1);
	
	/*
	@KafkaListener(
			  topics = "mes-topic", 
			  containerFactory = "cimKafkaListenerContainerFactory")
	*/
	
	@KafkaListener(topics = "mes-topic", group = "mesgroup")
	//public void getCimMessage(CimTxnInput cimMessage)
	public void getCimMessage(ConsumerRecord<?, ?> record)
	{
		Object cimMessage = record.value();
		
		System.out.println("Got CIM Mesage : " + cimMessage + " at offset : " + record.offset());
		
	}
	

	//@KafkaListener(topics = "mes-topic") //, group = "mesgroup"
	public void listen(ConsumerRecord<?, ?> record) {
	//public void listen(String record) {
		log.info("CimMessageListener() ENTRY message received");

		log.info(record.toString());
		//countDownLatch1.countDown();
		
		log.info("CimMessageListener() EXIT message received");
	}
	
	@KafkaListener(topics = "mes-topic111")
    public void process(String message/* , Acknowledgment ack */) {
        //Gson gson = new Gson();
        //Record record = gson.fromJson(message, Record.class);

        //log.info(record.getId() + " " + record.getName());
        // ack.acknowledge();
		log.info("got Message : " + message);
    }	

}