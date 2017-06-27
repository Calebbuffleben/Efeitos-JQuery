<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            .bgbox {
                position:fixed;
                left:0;
                top:0;
                width:100%;
                height:100%;
                background-color:rgba(0, 0, 0, 0.7);
                display:none;
            }
            .divbox {
                position:fixed;
                left:50%;
                top:50%;
                width:500px;
                height:400px;
                background-color:#FFF;
                margin-left:-270px;
                margin-top:-220px;
                padding:20px;
                display:none;
            }
        </style>
    </head>
    <body>
        <a href="javascript:;" class="galeria"><img src="2.jpg" border="0" width="150"/></a>
        <a href="javascript:;" class="galeria"><img src="002.jpg" border="0" width="150"/></a>
        
        <div class="bgbox"></div>
        <div class="divbox">
            <img src="" border="0" width="100%" /><button>Fechar</button>
        </div>

        <script type="text/javascript" src="jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="scriptgaleria.js"></script>
    </body>
</html>
