package net.noncore.members.controllers

import net.noncore.members.entities.Talent
import net.noncore.members.services.TalentService
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(path = ["api/talents"])
class TalentController(private val service: TalentService) {

    @GetMapping(produces = [MediaType.APPLICATION_JSON_UTF8_VALUE])
    fun list(): ResponseEntity<List<Talent>> {
        return ResponseEntity.ok(service.findAll());
    }
}