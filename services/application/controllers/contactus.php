<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class contactus extends CosRestController
{
 
	public function index_post()
	{
    
		/*try {*/
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
        $this->db->insert('contact_us', $data);
		
        $this->response(array("data" => array(
           "message" => "User added succefully."
        )));
		/*} catch(Exception $e) {
           $this->response(array("data" => array(
           "message" => "Some error occured. Please contact admin."
		)));
		}*/
  }
	public function sendemail()
	{
		//Load the email library
		$this->load->library('email');
		$email_address = $this ->input->post('email_address');
		$message = $this ->input->post('message');

                    
		$this->email->initialize(array("mailtype" => "html"));
		$this->email->from($email_address, "user");

		//email to admin
		$this->email->to('ajitnetwork@gmail.com');
		$this->email->cc('vishnutekale13@gmail.com');
		$this->email->subject('userfeedback');
		$this->email->message($message);
		$this->email->send();

		//email to user
					
		$email_address = $this ->input->post('email_address');
		$this->email->to($email_address);
		$this->email->from('info@gitcpl.com', "Admin Team");
		$this->email->subject("Thank You");
		$this->email->message("thank you for feedback we will get back to within 2 business days");
		$this->email->send();
					 
					

    }
	 
}
?>
