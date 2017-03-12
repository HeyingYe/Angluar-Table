<?php 
    class Goods{
        public $goodsId;
        public $goodsName;
        public $goodsPrice;
        public $goodsImg;
        public $goodss1;
        public $goodss2;
    }
    $con = new mysqli('127.0.0.1','root','','vip');
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'select * from female';
    $res = $con->query($sql);
    $arr = array();
    if(!$con->connect_error){
         if($res->num_rows > 0){
                while($row = $res->fetch_assoc()){
                    $goods = new Goods();
                    $goods->goodsId = $row["uid"];
                    $goods->goodsName = $row["name"];
                    $goods->goodsPrice = $row["price"];
                    $goods->goodsImg = $row["src"];
                    $goods->goodss1 = $row["s1"];
                    $goods->goodss2 = $row["s2"];
                    array_push($arr, $goods);
                }

                //返回json字符串  
            }else {
                array_push($arr, "没有商品");
            }
    }else{
        array_push($arr, "连接数据库失败");
    }
        $str = json_encode($arr);
        print_r( $str);
 ?>