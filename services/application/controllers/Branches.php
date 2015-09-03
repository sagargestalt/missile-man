<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Branches extends CosRestController
{
  public function index_get()
  {
    $this->load->database();
    $this->db->select('branch AS name');
    $this->db->distinct();
    $this->response(array("data" => $this->db->get('cosCourses')->result()));
  }
}
?>
