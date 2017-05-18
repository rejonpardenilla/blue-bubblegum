<?php

/**
 *
 */
include ( 'utils/AdminDB.php' );

class LoginUser {

  private $adminDB;

  function __construct() {
    # code...
    $this->adminDB = new AdminDB();
  }

  public function login( $userData ) {

    $userValid = $this->verifyUser( $userData );

    if ($userValid) {
      # code...
      $_SESSION[ 'BBL_email' ] = $userData[ 'email' ];
      $_SESSION[ 'BBL_password' ] = $userData[ 'password' ];

      print_r( json_encode( array( 'complete' => true  ) ) );
    } else {

      print_r( json_encode( array( 'complete' => false  ) ) );

    }

  }

  private function verifyUser( $userData ) {
    $condition = "email = '" .$userData[ 'email' ] . "' AND password= '" .$userData[ 'password' ]. "'";

    $response = $this->adminDB->obtener_elemento( 'users', $condition );

    $userFounded = sizeof( $response );
    $userValid = false;

    if ($userFounded > 0) {
      # code...
      $userValid = true;
      $_SESSION[ 'tipoUsuario' ] = $response[0]['tipo'];
    } else {
      # code...
      $userFounded = false;
    }

    return $userValid;
  }
}

function Main() {
  $_POST = json_decode(file_get_contents('php://input'),true);

  $userEmail = $_POST[ 'email' ];
  $userPassword = $_POST[ 'password' ];

  $userData = array(  'email' => $userEmail ,
                      'password' => $userPassword );

  $loginUser = new LoginUser();
  $loginUser->login( $userData );
}

Main()


 ?>
