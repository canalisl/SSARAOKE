package com.ssafy.domain.user.entity;

import com.ssafy.domain.bookmark.entity.Bookmark;
import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.room.entity.RoomUser;
import com.ssafy.domain.video.entity.Video;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import reactor.core.dynamic.annotation.On;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * 유저 모델 정의.
 */
//ddd DOMAIN  DRINVEN DEVELOP
@Entity
@Getter
@NoArgsConstructor
@Table(name = "TB_USER")
public class User extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_seq")
    private Long seq;

    @Column(name = "email")
    private String email;

    @Column(name = "nickname", unique = true)
    private String nickname;

//    @JsonIgnore
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//    @Column(name = "password")
//    private String password;

    @Column
    private LocalDateTime date_updated;

    @Embedded
    private final OAuthInfo oAuthInfo = new OAuthInfo();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Bookmark> bookmarks = new ArrayList<Bookmark>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RoomUser> roomUsers = new ArrayList<RoomUser>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Video> videos = new ArrayList<Video>();


    @Builder
    public User(String email, String nickname, String oAuthSeq, OAuthType oAuthType, String profilePath){
        this.email = email;
        this.nickname = nickname;
        this.oAuthInfo.setOauthInfo(oAuthSeq, oAuthType, profilePath);
    }

    public void updateNicknameAndEmail(String nickname, String email){
        if(nickname != null)
            this.nickname = nickname;
        if(email != null)
            this.email = email;
    }


}
