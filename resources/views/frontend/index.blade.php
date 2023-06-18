<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/bootstrap-5/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Pacifico&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&family=Great+Vibes&family=Pacifico&display=swap" rel="stylesheet">

    <title>ULTAH</title>
</head>
<body>

    <div class="container-fluid d-flex justify-content-center pt-4" id="background">
        <div class="card border-0 transparan-card" id="first-card">
            <div class="card-body d-flex justify-content-center">
                <div class="row d-flex justify-content-center">
                    <div class="col-sm-12 pt-5">
                        <p class="happy text-center">Happy Birtday</p>
                    </div>
                    <div class="col-sm-12" id="photo">
                        <img src="/img/gian.png" class="img-thumbnail rounded-circle" alt="...">
                    </div>
                    <div class="col-sm-12">
                        <div class="nama text-center">Nafisa Sya'ban Mubarok </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border-0 transparan-card" id="second-card" style="display: none">
            <div class="card-body d-flex justify-content-center">
                <div class="row d-flex justify-content-center">
                    <div class="col-sm-12 pt-5">
                        <p class="happy text-center">Happy Birtday</p>
                    </div>
                    <div class="col-sm-12" id="photo">
                        <img src="/img/gian.png" class="img-thumbnail rounded-circle" alt="...">
                    </div>
                    <div class="col-sm-12">
                        <div class="nama text-center">Nafisa Sya'ban Mubarok </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="navigasi">
        <div class="position-absolute bottom-0 start-50 translate-middle-x mb-4">
            <button class="btn border-0 d-none" id="previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
            </button>
            <button class="btn border-0 next-1" id="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </button>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="/bootstrap-5/js/bootstrap.bundle.min.js"></script>
    <script src="/js/script.js"></script>
</body>
</html>
