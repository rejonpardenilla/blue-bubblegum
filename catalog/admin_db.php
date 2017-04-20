<?php

    include_once 'generador_consultas.php';

	class AdminDB {
		const BASE_DATOS = 'mysql:host=localhost; dbname=tienda_stickers';
        const USUARIO = 'root';
        const CONTRASENA = '';
        private $conexion;
        private $generador_consultas;

        function __construct(){
	        $this->realizar_conexion();
	        $consulta_utf8 = 'SET CHARACTER SET utf8';
	        $this->conexion->exec( $consulta_utf8 );
	        $this->conexion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

            $this->generador_consultas = new Generador_consultas();
        }

        private function realizar_conexion() {
            try {
                $this->conexion = new PDO( self::BASE_DATOS, self::USUARIO, self::CONTRASENA );
                echo 'Conectado a la base de datos.';
            } catch ( Exception $e ) {
                die( 'Error: ' . $e->getMessage());
            }
        }

        public function insertar( $nombre_tabla, $datos ) {
            $consulta = $this->generador_consultas->obtener_consulta_insercion( $nombre_tabla, $datos );
            echo $consulta;
            $this->conexion->query( $consulta );
        }

        public function obtener_informacion( $nombre_tabla, $ids ) {
            if( $ids == null ) {
                $consulta = $this->generador_consultas->obtener_consulta_lista( $nombre_tabla );
            } else {
                $consulta = $this->generador_consultas->obtener_consulta_especifica( $nombre_tabla, $ids );
            }
                $resultado = $this->conexion->query( $consulta );
                $datos_obtenidos = $resultado->fetchAll();
                
            print_r ( json_encode( $datos_obtenidos ) );
        }

        public function modificar( $nombre_tabla, $datos ) {
            $consulta = $this->generador_consultas->obtener_consulta_modificacion( $nombre_tabla, $datos );
            $this->conexion->query( $consulta );
        }

        public function eliminar( $nombre_tabla, $ids ) {
            $consulta = $this->generador_consultas->obtener_consulta_eliminacion( $nombre_tabla, $ids );
            $resultado = $this->conexion->query( $consulta );
    }
	}
?>