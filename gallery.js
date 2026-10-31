// Gallery images. To add one, add a line to the right section below.
// Images live in the assets folder of the main Jexpresso repository.
var base = "https://raw.githubusercontent.com/smarras79/Jexpresso/master/assets/";

var images = {
  atmosphere: [
    ["vorticity-grey-scale.gif", "Planet Saturn"],
    ["bomex.png", "Shallow cumuli with BOMEX conditions"],
    ["SWsphere-Galewki-visc1e5-36x36.jpg", "Shallow water on a spherical shell"],
    ["thetaTracersMeshUnstr.png", "2D Euler equations with buoyancy and two passive tracers"],
    ["rtb3d.png", "3D Euler equations with buoyancy"],
    ["48.png", "Rising thermal bubble with Laguerre elements for outflows"],
    ["wvelo.png", "Hydrostatic linear mountain waves with Laguerre elements for outflows"],
    ["NHjexpVSwrf.png", "Non-hydrostatic mountain waves: comparison against WRF"]
  ],
  compressible: [
    ["sod1d.png", "1D shock tube with DynSGS for shock capturing"],
    ["1dacoustic.png", "1D acoustic wave"],
    ["shock-MrhoSchielern.jpg", "Flow at Mach 3 with forward-facing step"],
    ["NACA64A210-TWOFIGS.png", "Flow at Mach 3 with airfoil"],
    ["KH-EC-SGSsmag.jpg", "Kelvin-Helmholtz instability"]
  ],
  mhd: [
    ["MHD_By.png", "Magnetized Kelvin-Helmholtz instability"],
    ["MHD-OT-4plots.png", "Orszag-Tang vortex. Top: density at t = 0.5 s and t = 1.0 s. Bottom: residual viscosity. 120 x 120 4th-order spectral elements."]
  ],
  laguerre: [
    ["wave_v_4.png", "1D wave equation with Laguerre absorbing layers"],
    ["Wave_Train_final.png", "1D wave train for linearized shallow water equations"],
    ["ad2d-4s-line.png", "2D advection-diffusion equation"],
    ["Helmholtz_from_jexpresso-line.png", "2D Helmholtz equation"]
  ],
  solid: [
    ["beam2d.jpeg", "Solid elasticity"]
  ]
};

document.querySelectorAll(".gallery").forEach(function (box) {
  images[box.dataset.section].forEach(function (item) {
    var url = base + item[0];
    var fig = document.createElement("figure");
    fig.innerHTML = '<a href="' + url + '"><img loading="lazy" src="' + url + '" alt="' + item[1] + '"></a>' +
                    '<figcaption>' + item[1] + '</figcaption>';
    box.appendChild(fig);
  });
});
