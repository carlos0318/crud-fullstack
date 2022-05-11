const express = require('express');
const router = express.Router();
const {
    getMissionCommanders,
    getMissionCommander,
    createMissionCommander,
    updateMissionCommander,
    deleteMissionCommander
} = require('../controllers/mission-commanders-controllers');

router.get('/', getMissionCommanders);
router.get('/:id', getMissionCommander);
router.post('/', createMissionCommander);
router.put('/:id', updateMissionCommander);
router.delete('/:id', deleteMissionCommander);

module.exports = router;