<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Colleges extends CosRestController
{
  public function search_get($id=0)
  {
    $this->load->database();

    if($id) {
      $this->db->select('cosColleges.name as collegeName');
      $this->db->select('cosColleges.id as collegeId');
      $this->db->select('cosColleges.address as address');
      $this->db->select('cosColleges.website as website');
      $this->db->select('cosColleges.email as email');
      $this->db->select('cosColleges.establish_year as esta_year');
      $this->db->from('cosColleges');
      $this->db->where('id', $id);

      $query = $this->db->get();

      $this->response(array("data" => $query->result(), 'query'=>$this->db->last_query(), "id"=> $id));

    } else {
      $this->db->select('cosColleges.name as collegeName');
      $this->db->distinct('cosColleges.name');
      $this->db->select('cosColleges.id as collegeId');
      $this->db->select('cosColleges.address as address');
      $this->db->select('cosColleges.website as website');
      $this->db->select('cosColleges.email as email');
      $this->db->from('cosColleges');
      $this->db->join('cosCourses', 'cosCourses.collegeId = cosColleges.id', 'inner');
      $this->db->where('stream', $this->get('stream'));
      $this->db->where('cosColleges.district', $this->get('district'));
      $this->db->where('branch', $this->get('course'));

      $query = $this->db->get();

      $this->response(array("data" => $query->result(), 'query'=>$this->db->last_query()));

    }
  }
}
?>
