<template>
  <div>

<section id="gallery">
	<div class="container">
		<div class="row">
		   
	        <div class="col-lg-4 col-xs-12 img-space">
				<div class="gallery">
					<a href="https://www.bqtek.com/wp-content/uploads/2016/04/tarla-sulama-2.jpg" target="_blank">
					   <img class="img-responsive" src="https://www.bqtek.com/wp-content/uploads/2016/04/tarla-sulama-2.jpg"/>
					   <span class="overlay">+</span>
					</a>  
				</div>
			</div>
			
			<div class="col-lg-4 col-xs-12 img-space">
				<div class="gallery">
					<a href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSed0hUw-LX2IFt5gxYC82LxRpedgpwr5AYbYT1K6xn4NmIjuPN" target="_blank">
					   <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSed0hUw-LX2IFt5gxYC82LxRpedgpwr5AYbYT1K6xn4NmIjuPN"/>
					   <span class="overlay">+</span>
					</a>  
				</div>
			</div>
			
			<div class="col-lg-4 col-xs-12 img-space">
				<div class="gallery">
					<a href="https://yigilcaninsesi.net/fotolar/2019/buyuk/bireysel-sulama-sistemlerine-500000-tl-hibe-destegi-verilecek-20190205114758.jpg" target="_blank">
					   <img class="img-responsive" src="https://yigilcaninsesi.net/fotolar/2019/buyuk/bireysel-sulama-sistemlerine-500000-tl-hibe-destegi-verilecek-20190205114758.jpg"/>
					   <span class="overlay">+</span>
					</a>  
				</div>
			</div>
			
			<div class="col-lg-6 col-xs-12 img-space">
				<div class="gallery">
					<a href="https://www.1000ciftci1000bereket.com/storage/2019/05/sulama-00.jpg" target="_blank">
					   <img class="img-responsive" src="https://www.1000ciftci1000bereket.com/storage/2019/05/sulama-00.jpg"/>
					   <span class="overlay2">+</span>
					</a>  
				</div>
			</div>
			
			<div class="col-lg-6 col-xs-12 img-space">
				<div class="gallery">
					<a href="https://i.ytimg.com/vi/lFH_FG02OBQ/maxresdefault.jpg" target="_blank">
					   <img class="img-responsive" src="https://i.ytimg.com/vi/lFH_FG02OBQ/maxresdefault.jpg"/>
					   <span class="overlay2">+</span>
					</a>  
				</div>
			</div>
		</div>
    </div>
</section>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
img{
    width:100%;
    height: 100%;
}

.gallery a {
	position: relative;
	display: block;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 100px;
    height: 100%;
	width: 100%;
    padding-top:40px;
    top: 0;
    left: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    transition: all 1s ease;
}

.overlay2{
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 100px;
    height: 100%;
	width: 100%;
    padding-top:100px;
    top: 0;
    left: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    transition: all 1s ease;
}

.gallery a:hover .overlay ,
.gallery a:hover .overlay2 {
    opacity: 0.8;
}

.img-space{
    margin:20px 0px;
}
</style>