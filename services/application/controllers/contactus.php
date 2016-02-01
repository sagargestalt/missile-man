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
    $this->sendemail();

    $this->load->database();
    $this->load->helper('array');

    //TODO : Add the contact_us table then enable this line
    //$this->db->insert('contact_us', $data);

    $this->response(array("data" => array(
      "message" => "Your feedback sent succefully. Thanks."
    )));
  }
	public function sendemail()
	{
		//Load the email library
		$this->load->library('email');
		//$email_address = $this->input->post('email_address');
		//$message = $this->input->post('message');


		$this->email->initialize(array("mailtype" => "html"));
		//$this->email->from($email_address, "user");
		$this->email->from($this->post('email'));
		$message = ($this->post('msg'));

		//email to admin
		$this->email->to('ajitnetwork@gmail.com');
		$this->email->cc('vishnutekale13@gmail.com');
		$this->email->subject('userfeedback');
		$this->email->message($message);
		$this->email->send();

		//email to user

		//$email_address = $this ->input->post('email_address');
		//$this->email->to($email_address);
		$this->email->to($this->post('emailaddress'));
		$this->email->from('info@gitcpl.com', "Admin Team");
		$this->email->subject("Thank You");
		$this->email->message("Thank you for feedback. We will get back to you soon...!!!");
		$this->email->send();
    }
}
?>
