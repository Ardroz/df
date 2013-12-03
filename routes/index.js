
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Df' });
};

exports.mr = function(req, res){
  res.render('mr', { title: 'Df', nav: 'mr' });
};

exports.mr_historia = function(req, res){
  res.render('mr_historia', { title: 'Df', nav: 'mr' });
};

exports.mr_visita = function(req, res){
  res.render('mr_visita', { title: 'Df', nav: 'mr' });
};

exports.mr_localizacion = function(req, res){
  res.render('mr_localizacion', { title: 'Df', nav: 'mr' });
};

exports.tl = function(req, res){
  res.render('tl', { title: 'Df', nav: 'tl' });
};

exports.tl_historia = function(req, res){
  res.render('tl_historia', { title: 'Df', nav: 'mr' });
};

exports.tl_visita = function(req, res){
  res.render('tl_visita', { title: 'Df', nav: 'mr' });
};

exports.tl_localizacion = function(req, res){
  res.render('tl_localizacion', { title: 'Df', nav: 'mr' });
};

exports.ba = function(req, res){
  res.render('ba', { title: 'Df', nav: 'ba' });
};

exports.ba_historia = function(req, res){
  res.render('ba_historia', { title: 'Df', nav: 'mr' });
};

exports.ba_visita = function(req, res){
  res.render('ba_visita', { title: 'Df', nav: 'mr' });
};

exports.ba_localizacion = function(req, res){
  res.render('ba_localizacion', { title: 'Df', nav: 'mr' });
};

exports.nosotros = function(req, res){
  res.render('nosotros', { title: 'Df'});
};

exports.contacto = function(req, res){
  res.render('contacto', { title: 'Df'});
};