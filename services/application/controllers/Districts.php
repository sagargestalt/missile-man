<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/REST_Controller.php';

class Districts extends REST_Controller
{
  public function index_get()
  {
    // $this->load->database();
    // $this->response( $this->db->get('district')->result() );

    // $data = array('returned: '. $this->get('id'));
    // $this->response($data);

    $this->load->database();
    // $this->db->select('districtID, districtName');
    // $sql = $this->db->get_compiled_select( 'districts' );
    // $this->response( $sql );

    $this->db->select('district AS name');
    $this->db->distinct();
    $this->response(array("data" => $this->db->get('cosColleges')->result()));
  }
}
?>
