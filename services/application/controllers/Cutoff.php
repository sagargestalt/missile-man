<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Cutoff extends CosRestController
{

  public function parsePolyData( $data, $query ) {
      $seattype = array();
      $gender = array();
      $category = array();

      $key = "";
      $val = "";

      foreach ($data as &$value) {
          // SEATTYPE
          if(strpos( $value->seatInfo, 'APA')){
          } else if(strpos( $value->seatInfo, 'APM')){
          } else if(strpos( $value->seatInfo, 'DEF' )){
            array_push($seattype, 'DEF');
          } else if(strpos( $value->seatInfo, 'PH' )) {
            array_push($seattype, 'PH');
          } else {

            array_push($seattype, $value->seatInfo[0]);
          }

          // Gender
          if(strpos( $value->seatInfo, 'APA' )){
          } else if(strpos( $value->seatInfo, 'APM')){
          } else if(strpos( $value->seatInfo, 'DEF' )){
          } else if(strpos( $value->seatInfo, 'PH' )) {
          } else {
            array_push($gender, $value->seatInfo[1]);
          }

          // Category

          if(strpos( $value->seatInfo, 'APA' )){
          } else if(strpos( $value->seatInfo, 'APM')){
          } else if(strpos( $value->seatInfo, 'DEF' )){
          } else if(strpos( $value->seatInfo, 'PH' )) {
          } else {
            array_push($category, substr($value->seatInfo, 2, strlen($value->seatInfo)-3));
          }
        }
      $seattype = array_values(array_unique($seattype));
      $newSeatType = array();
      foreach ($seattype as &$d) {
        $val = "";
        $label = "";
        if( $d == "N" ) {
          $val = "N";
          $label = "Non Technical";
        }
        if( $d == "T" ) {
          $val = "T";
          $label = "Technical";
        }
        if( $d == "DEF" ) {
          $val = "DEF";
          $label = "Defence";
        }
        if( $d == "PH" ) {
          $val = "PH";
          $label = "Physically Handicapped";
        }
        if( $d == "M" ) {
          $val = "M";
          $label = "Minority";
        }
        $obj = (object) array('val' => $val, 'label'=>$label);
        array_push($newSeatType, $obj);
      }

      $gender = array_values(array_unique($gender));

      $newGender = array();
      foreach ($gender as &$d) {
        $val = "";
        $label = "";
        if( $d == "G" ) {
          $val = "G";
          $label = "Male";
        }
        if( $d == "L" ) {
          $val = "L";
          $label = "Female";
        }
        $obj = (object) array('val' => $val, 'label'=>$label);
        array_push($newGender, $obj);
      }

      $category = array_values(array_unique($category));

      $newCategories = array();
      foreach ($category as &$d) {
        $val = "";
        $label = "";

        if( $d == "C" ) {
          $val = "C";
          $label = "C";
        } else if( $d == "P" ) {
          $val = "P";
          $label = "Parasi";
        } else if( $d == "M" ) {
          $val = "M";
          $label = "Muslim";
        } else if( $d == "S" ) {
          $val = "S";
          $label = "Sikh";
        } else if( $d == "B" ) {
          $val = "B";
          $label = "Buddha";
        } else if( $d == "J" ) {
          $val = "J";
          $label = "Jain";
        } else {
          $val = $d;
          $label = $d;
        }
        $obj = (object) array('val' => $val, 'label'=>$label);
        array_push($newCategories, $obj);
      }

      $this->response(array("data"=>array("seatType" => $newSeatType,
                              "gender" => $newGender,
                              "category" => $newCategories,
                              "query" => $query)));
  }

  public function index_get($id=0)
  {
    $this->load->database();
    $this->db->select('seattype AS seatInfo');
    $this->db->distinct();
    $this->db->from('cosColleges');
    $this->db->join('cosCourses', 'cosCourses.collegeId = cosColleges.id', 'inner');
    $this->db->join('cosCutoff_2015_poly', 'cosCourses.id = cosCutoff_2015_poly.courseId', 'inner');

    $this->db->where('cosCourses.stream', $this->get('stream'));
    $this->db->where('cosColleges.district', $this->get('district'));
    $this->db->where('branch', $this->get('course'));
    $this->db->where('cosColleges.id', $this->get('id'));

    // $this->db->where('cosCourses.stream', 'Polytechnic');
    // $this->db->where('cosColleges.district', 'Jalgaon');
    // $this->db->where('branch', 'Post S.S.C. Diploma in Engineering (Polytechnics)');
    // $this->db->where('cosColleges.id', 5008);

    $query = $this->db->get();
    $this->parsePolyData( $query->result(), $this->db->last_query() );
  }
}
?>
