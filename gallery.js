// Gallery images. To add one, add a line to the right section below.
// Images live in the assets folder of the main Jexpresso repository.
var base = "https://raw.githubusercontent.com/smarras79/Jexpresso/master/assets/";

var images = {
  atmosphere: [
    ["vorticity-grey-scale.gif", "Planet Saturn"],
    ["bomex.png", "Shallow cumuli with BOMEX conditions"],
    ["barbados.jpg", "Left: real shallow cumulus clouds near Barbados (photo: P. Blossey, U. Washington). Right: the same kind of clouds simulated with BOMEX conditions."],
    ["dc.png", "Density current"],
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
    ["KH-EC-SGSsmag.jpg", "Kelvin-Helmholtz instability"],
    ["ffs_shocks.jpg", "Mach 3 flow over a forward-facing step: Mach number, DynSGS viscosity and pressure"]
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
  amr: [
    ["AMR-rtb.png", "Rising thermal bubble with adaptive mesh refinement. Left: the refined mesh follows the bubble."]
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
    fig.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
      showLarge(url, item[1]);
    });
    box.appendChild(fig);
  });
});

// Show an image full size on top of the page instead of leaving the site.
var viewer = document.createElement("div");
viewer.id = "viewer";
viewer.innerHTML = '<img alt=""><p></p><p class="close">Click anywhere to close</p>';
document.body.appendChild(viewer);

function showLarge(url, caption) {
  viewer.querySelector("img").src = url;
  viewer.querySelector("img").alt = caption;
  viewer.querySelector("p").textContent = caption;
  viewer.style.display = "flex";
}

function hideLarge() {
  viewer.style.display = "none";
}

viewer.addEventListener("click", hideLarge);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") hideLarge();
});
