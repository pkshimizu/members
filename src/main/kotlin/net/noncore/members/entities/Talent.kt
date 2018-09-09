package net.noncore.members.entities

import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "talent")
data class Talent(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    @Column(name = "name", nullable = false)
    var name: String = "",
    @Column(name = "kana", nullable = false)
    var kana: String = "",
    @Column(name = "position", nullable = true)
    var position: String = "",
    @Column(name = "department", nullable = false)
    var department: String = "",
    @Column(name = "mail", nullable = false)
    var mail: String = "",
    @Column(name = "slack", nullable = false)
    var slack: String = "",
    @Column(name = "photo", nullable = false)
    var photo: String = "",
    @Column(name = "seat_x", nullable = false)
    var seatX: Int = 0,
    @Column(name = "seat_y", nullable = false)
    var seatY: Int = 0,
    @Column(name = "status", nullable = false)
    var status: String = ""
) : Serializable
