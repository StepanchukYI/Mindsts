<?php

/**
 * Created by PhpStorm.
 * User: Illya
 * Date: 28.05.2017
 * Time: 16:57
 */
class _sms{
    public $base_url_SendSMS = 'https://www.experttexting.com/exptapi/exptsms.asmx/SendSMS';
    public $base_url_SendSMSUnicode = 'https://www.experttexting.com/exptapi/exptsms.asmx/SendSMSUnicode';

    public $username = 'MindsTS';
    public $password = 'k6qx9j';
    public $apikey = 'wyzvvs66g09exw6';

    function send2($from, $to)
    {
        $fieldcnt    = 6;
        $fieldstring = "Userid=$this->username&pwd=$this->password&APIKEY=$this->apikey&MSG=عزيزي السائق، نود تذكيرك بموعدك المحجوز غدا لخدمات سيارتك لدى مايندز في البيادر&FROM=$from&To=$to&type=unicode";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->base_url_SendSMS);
        curl_setopt($ch, CURLOPT_POST, $fieldcnt);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fieldstring);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $res = curl_exec($ch);
        curl_close($ch);
        return $res;
    }

    function send($from, $to)
    {
        $fieldcnt    = 6;
        $fieldstring = "Userid=$this->username&pwd=$this->password&APIKEY=$this->apikey&MSG=موعدك غدا بالموعد المحدد لدى مايندز لخدمة سيارتك
٠٧٩٨٤١١٣٧٧&FROM=$from&To=$to&type=unicode";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->base_url_SendSMSUnicode);
        curl_setopt($ch, CURLOPT_POST, $fieldcnt);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fieldstring);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $res = curl_exec($ch);
        curl_close($ch);
        return $res;
    }
}