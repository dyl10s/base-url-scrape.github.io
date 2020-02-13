<?php header("Access-Control-Allow-Origin: *"); ?>
<html>
    <body>
        <?php
            try{
                $data=gzdecode( file_get_contents( $_GET["url"] ) );
                if ($data == false){
                    echo file_get_contents( $_GET["url"] );
                }else{
                    echo $data;
                }
            }catch (Exception $e){
                echo file_get_contents( $_GET["url"] );
            }
        ?>
    </body>
</html>