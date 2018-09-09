package net.noncore.members.services

import net.noncore.members.entities.Talent

interface TalentService {
    fun findAll(): List<Talent>
}