package com.example.dto;

public class InscriptionDto {
    private Long userId;
    private Long coursId;

    public InscriptionDto(Long userId, Long coursId) {
        this.userId = userId;
        this.coursId = coursId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCoursId() {
        return coursId;
    }

    public void setCoursId(Long coursId) {
        this.coursId = coursId;
    }
}
