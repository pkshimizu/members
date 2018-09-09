package net.noncore.members.repositories

import net.noncore.members.entities.Talent
import org.springframework.data.jpa.repository.JpaRepository

interface TalentRepository : JpaRepository<Talent, Long>