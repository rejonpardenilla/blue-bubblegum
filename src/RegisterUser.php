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
    $this->adminDB->insertar( $table, $userData );

    $_SESSION[ 'name' ] = $userData[ 'name' ];
    $_SESSION[ 'email' ] = $userData[ 'email' ];

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
