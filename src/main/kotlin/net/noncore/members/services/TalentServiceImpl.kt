package net.noncore.members.services

import net.noncore.members.entities.Talent
import net.noncore.members.repositories.TalentRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class TalentServiceImpl(private val repository: TalentRepository) : TalentService {

    @Transactional(readOnly = true)
    override fun findAll(): List<Talent> {
        return repository.findAll()
    }
}