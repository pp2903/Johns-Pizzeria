// $(document).ready(()=>{
//     var mainLogo= document.getElementById('MainLogo');
//     mainLogo.style.color = '#352';
    
//     mainLogo.addEventListener('click', e =>{
//         console.log('Logo Clicked');
        
//     })
    
//     mainLogo.addEventListener('mouseover', ()=>{
//         console.log('Mouse Over')
//     })
    
//     $('.pizza-vector').hide();
//     $('#MainLogo').hide();
//     $('.nav-link').hide();
//     $('.pizza-vector').fadeIn(3000);
//     $('.nav-link').fadeIn(2000);
//     $('#MainLogo').fadeIn(1500);


//     // sign form animation
//     $('.log-form').hide();
//     $('.log-form').slideDown(2000);

// });



$(document).ready(()=>{

    //page loads with fading animation
    // $('body').css('display', 'none');
    // $('body').fadeIn(2000);  

    //Main Logo Animation
    $('#MainLogo').mouseover(()=>{
        $('#MainLogo').css('color','#ef7710')
    })
    $('#MainLogo').mouseleave(()=>{
        $('#MainLogo').css('color','#352')
    })


    $('.log-form').slideDown();
    //Sign logo
    $('.sign-legend').animate({
        opacity: '1',
        fontSize:'50px'
        
        
    },1500);

    //pizza animation
    $('.pizza-vector').animate({
        opacity: '1',
        // width:'28%'
        
        
    },1800);

    $('.menu-heading').animate({
        opacity:'1',
        fontSize:'50px'
    },1500);
    $('.menu').animate({
        opacity:'1',
        
    },1500);
    
   



});




