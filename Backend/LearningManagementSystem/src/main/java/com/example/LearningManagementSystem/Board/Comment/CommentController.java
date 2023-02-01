package com.example.LearningManagementSystem.Board.Comment;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class CommentController {

    @Autowired
    private final CommentService commentService;

    //댓글 작성
    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/board/{boardId}/comments")
     public void postComment(@PathVariable Long boardId, @RequestBody CommentDTO commentDto){
        commentService.postComment(boardId,commentDto);
    }

    @DeleteMapping("/comments/{id}")
    public void deleteComment(@PathVariable Long id){
       commentService.deleteComment(id);
    }

    //댓글 수정
    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/comments/update/{id}")
    public void updateComment(@PathVariable Long id, @RequestBody CommentDTO commentDto){
        commentService.updateComment(id,commentDto);
    }
}
