<?php
     header("Content-type:text/html;charset=utf-8");
     //接收前端的数据
     $username=$_GET['username'];

     //处理
    //链接数据库
    $con=mysql_connect("localhost","root","root");
    //判断
    if(!$con){
        echo("数据库出错".mysql_error());
    }else{
        //选择库
        mysql_select_db("mydb1908",$con);

        //执行语句
        //查询该用户名是否存在
        $sqlstr="select * from vip where username='$username'";
        $result=mysql_query($sqlstr,$con);
        //获得结果的行数
        $rows=mysql_num_rows($result);

        //关闭数据库

        mysql_close($con);
        if($rows>0){
            echo "用户名已被使用";
        }else{
            echo "注册 成功";
        }
    }


?>