<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/REST_Controller.php';

class Users extends REST_Controller
{
  public function index_get()
  {
    $this->load->database();
    $this->db->select('csId AS id');
    $this->db->select('csFirstName AS firstName');
    $this->db->select('csLastName AS lastName');
    $this->db->select('csPhone AS phone');
    $this->db->select('csGender AS gender');
    $this->db->select('csDistrict AS district');
    $this->db->select('csAboutMe AS aboutMe');
    $this->response(array("data" => $this->db->get('cosUsers')->result()));
  }

  public function index_post()
  {
    try {
      $user = array(
        'csFirstName' => $this->input->post('firstName'),
        'csLastName' => $this->input->post('lastName'),
        'csPhone' => $this->input->post('phone'),
        'csGender' => $this->input->post('gender'),
        'csDistrict' => $this->input->post('district'),
        'csAboutMe' => $this->input->post('aboutMe'),
        'csEmail' => $this->input->post('email'),
        'csPassword' => $this->input->post('password'),
        'ipAddress' => $this->input->ip_address(),
        'createdDateTime' => date("Y-m-d H:i:s")
      );

      $user = array(
        'csFirstName' => 'Demo',
        'csLastName' => 'Demo',
        'csPhone' => '9552533434',
        'csGender' => 'M',
        'csDistrict' => 'Latur',
        'csAboutMe' => 'Test',
        'csEmail' => 'demo@gmail.com',
        'isBlock' => 1,
        'csOtp'=> rand(pow(10, 3), pow(10, 4)-1),
        'csPassword' => md5('demo'),
        'ipAddress' => $this->input->ip_address(),
        'createdDateTime' => date("Y-m-d H:i:s")
      );

      $this->load->database();
      $this->load->helper('array');

      $this->db->where('csPhone',element( 'csPhone', $user ));
      $this->db->or_where('csEmail', element( 'csEmail', $user ));

      $query = $this->db->get('cosUsers');

      $count = $query->num_rows();
      if( 1 ) {
        $this->db->insert('cosUsers', $user);
        $this->response(array("data" => array(
          "status" => 201,
          "id" => element( 'csPhone', $user ),
          "message" => "User added succefully."
        )));
      } else {
        $this->response(array("data" => array(
          "status" => 301,
          "message" => "Mobile number Or email allready exists.",
          "query" => $this->db->last_query()
        )));
      }
    } catch(Exception $e) {
      $this->response(array("data" => array(
        "status" => 501,
        "message" => "Some error occured. Please contact admin.",
        "query" => $this->db->last_query()
      )));
    }
  }

  public function authorize_post()
  {
    $phone = $this->input->post('id');
    $otp = $this->input->post('otp');

    $this->load->database();
    $this->load->helper('array');

    $this->db->where('csPhone',$phone );
    $this->db->where('csOtp', $otp );

    $query = $this->db->get('cosUsers');

    $count = $query->num_rows();

    if($count === 1 ) {
      $this->response(array("data" => array(
        "status" => 201,
        "message" => "User is authorised.",
        "otp" => $otp
      )));
    } else {
      $this->response(array("data" => array(
        "status" => 301,
        "message" => "You entered incorrect OTP. Please try agin.",
        "otp" => $otp
      )));
    }
  }
}
?>
