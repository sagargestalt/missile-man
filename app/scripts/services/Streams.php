<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Streams extends CosRestController
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

    $this->db->select('stream AS name, stream AS value');
    $this->db->distinct();
    $this->db->order_by("stream", "asc");
    $this->db->where_not_in('stream', 'N/A');
    $this->response(array("data" => $this->db->get('cosCourses')->result()));
  }

  public function districts_get($district)
  {
    // $this->load->database();
    // $this->response( $this->db->get('district')->result() );

    // $data = array('returned: '. $this->get('id'));
    // $this->response($data);

    $this->load->database();
    // $this->db->select('districtID, districtName');
    // $sql = $this->db->get_compiled_select( 'districts' );
    // $this->response( $sql );

    $this->db->select('stream AS name, stream AS value');
    $this->db->distinct();
    $this->db->order_by("stream", "asc");
    $this->db->where('district', $district);
    $this->db->where_not_in('stream', 'N/A');

    $this->response(array("data" => $this->db->get('cosCourses')->result()));
  }
}
?>
