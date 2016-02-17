<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Contactus extends CosRestController
{

	public function index_post()
	{
    $data = array(
      'first_name' => $this->post('firstname'),
      'last_name' => $this->post('lastname'),
      'company_name' => $this->post('companyname'),
      'email_address' => $this->post('emailaddress'),
      'message' => $this->post('msg')
    );
    $this->sendemail($data);

    $this->load->database();
    $this->load->helper('array');

    //TODO : Add the contact_us table then enable this line
    //$this->db->insert('contact_us', $data);

    $this->response(array("data" => array(
      "message" => "Your feedback sent succefully. Thanks."
    )));
  }
	public function sendemail($data)
	{
		$this->load->library('email');
		$config = array(
			'charset' => 'utf-8',
			'wordwrap' => TRUE,
		);

		$mailData = "Thank you for your feedback. We will get back to you soon.";
		$this->email->initialize($config);
		$this->email->from('support@cutoffsearch.com', 'Cutoff Support');
		$this->email->set_mailtype('html');
		$this->email->to($data['email_address']);
		$this->email->bcc('vishnutekale13@gmail.com');
		$this->email->subject('Thank You...!!!');
		$this->email->message($mailData);
		$this->email->send();

		$mailData = "User registered : " . $data['email_address'];
		$mailData .= "\nFeedback : " . $data['message'];
		$this->email->initialize($config);
		$this->email->from('support@cutoffsearch.com', 'Cutoff Support');
		$this->email->set_mailtype('html');
		$this->email->to('ajitnetwork@gmail.com');
		$this->email->cc('vishnutekale13@gmail.com');
		$this->email->subject('Cutoff - Contact us');
		$this->email->message($mailData);
		$this->email->send();
  }

	public function emailtest_get()
	{
		$this->load->library('email');
		$config = array(
			'wordwrap' => TRUE,
			'protocol' => 'smtp',
			'smtp_host' => 'mail.cutoffsearch.com',
			'smtp_port' => 25,
			'smtp_user' => 'support@cutoffsearch.com',
			'smtp_pass' => 'support@cos',
			'mailtype' => 'html',
			'charset' => 'utf-8'
		);

		$mailData = "Hello User,<br>User registered : abc@gmail.com";
		$mailData .= "<br>Feedback : This is a sample reply";
		$this->email->initialize($config);
		$this->email->from('support@cutoffsearch.com');
		$this->email->reply_to('support@cutoffsearch.com');
		$this->email->to('ajitnetwork@gmail.com');
		$this->email->cc('vishnutekale13@gmail.com');
		$this->email->subject('Cutoff - Contact us');
		$this->email->message($mailData);
		$this->email->send();

		$this->response(array("data" => array(
			"message" => $this->email->print_debugger()
		)));
		// $this->email->send();
	}

}
?>
