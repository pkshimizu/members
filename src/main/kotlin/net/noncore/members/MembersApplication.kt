package net.noncore.members

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MembersApplication

fun main(args: Array<String>) {
    runApplication<MembersApplication>(*args)
}
