<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
<body>
        <div class="container">
            <div class="row row-cols-1">
              <div class="col d-flex" id="img-fortune-teller">
                <img src="images/fortune-teller.png" alt="fortune teller"></div>
              <div class="col d-flex" id="instructions">
                <pre>
                    Would you dare to tempt fate? 
                    Click to pick a card.
                    Flip card to reveal your fortune.
                </pre>
              </div>
              <div class="col button-div">
                <button type="button" class="btn btn-warning" onclick="getTarotImages()" id="button" >Click to pick a card.</button>
              </div>
              <div class="col button-div">
                <button type="button" class="btn btn-info" onclick=clearResult(); id="button" >Click to reset.</button>
              </div>
              <!-- start of flip card -->
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img id="flip-card-id">
                  </div>
                  <div class="flip-card-back">
                    <div id="fortune"></div>
                  </div>
                </div>
              <!-- end of flip card -->
              </div>
            <!-- end of row -->
            </div>
          <!-- end of container -->
          </div>
          <script src="script.js"></script>
        </body>
       
