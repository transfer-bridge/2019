#include <SoftwareSerial.h>
#define LED 9

void setup() {
  // put your setup code here, to run once:
//  AT+UUID0xAAA0;
//  OK+Set:0xAAA0;
//
//  AT+CHAR0xAAB0;
//  OK+Set:0xAAB0;

  Serial.begin(9600);
  pinMode(LED,OUTPUT);

  SoftwareSerial HM10(0,1); //rx, tx
}

void loop() {
  // put your main code here, to run repeatedly:
  HM10.listen();
  while(HM10.available() > 0)
  {
    byte data = HM10.read();

    if (data == 0x10)
    {
      digitalWrite(LED, HIGH);
    }

//    if (//sdfasdf)
//      {
//        byte d[1] = {0x20};
//        HM10.write(d,sizeof(d));        
//      }

      
  }
  

}
