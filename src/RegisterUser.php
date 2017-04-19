<?php

/**
 *
 */
include ( 'utils/AdminDB.php' );

class RegisterUser {

  private $adminDB;

  function __construct() {
    # code...
    $this->adminDB = new AdminDB();
  }

  public function register( $userData ) {
    $table = 'users';
    //$this->adminDB->insertar( $table, $userData );
    $repeatUser = $this->verifyUserNotRepeated( $userData );

    if ( $repeatUser ) {
      # code...
    } else {
      # code...
      $this->adminDB->insertar( $table, $userData );
      $_SESSION[ 'name' ] = $userData[ 'name' ];
      $_SESSION[ 'email' ] = $userData[ 'email' ];
    }



  }

  private function verifyUserNotRepeated( $userData ) {
    $condition = "name = '" . $userData[ 'name' ] . "' OR email= '" .$userData[ 'email' ] . "'";

    $response = $this->adminDB->obtener_elemento( 'users', $condition );
    
     $usersWithSameData = sizeof( $response );
     $repeatUser = true;

     if( $usersWithSameData > 0 ) {
       $repeatUser = true;
     } else {

       $repeatUser = false;
     }


     return $repeatUser;

  }
}

function Main() {
  $_POST = json_decode(file_get_contents('php://input'),true);

  $userName = $_POST[ 'name' ];
  $userEmail = $_POST[ 'email' ];
  $userPassword = $_POST[ 'password' ];

  $userData = array(  'name' => $userName ,
                      'email' => $userEmail,
                      'password' => $userPassword );

  $registerUser = new RegisterUser();
  $registerUser->register( $userData );
}

Main()


 ?>
