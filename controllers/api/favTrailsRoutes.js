const router = require('express').Router();
const { FavTrails } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res) => {
    try{
      const trailsData = await FavTrails.findAll({
      });
      res.render('favTrails', {trailsData})
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.get('/:id', async (req,res) => {
    try{
      const favTrailsData = await FavTrails.findOne({
        where: {
          favTrail_id:req.params.id,
        },
      });
      res.status(200).json(favTrailsData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/', withAuth, async (req, res) => {
    try {
      const newfavTrails = await FavTrails.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newfavTrails);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const favTrailsData = await FavTrails.update({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!favTrailsData) {
        res.status(404).json({ message: 'No trail found with this id!' });
        return;
      }
  
      res.status(200).json(favTrailsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const favTrailsData = await FavTrails.destroy({
        where: {
          favTrail_id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!favTrailsData) {
        res.status(404).json({ message: 'No trail found with this id!' });
        return;
      }
  
      res.status(200).json(favTrailsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;